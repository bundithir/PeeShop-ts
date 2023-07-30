import { Button, Table , Checkbox, Row , Form , Input ,InputNumber , Select ,Popconfirm , Col} from 'antd';
import { useAppSelector, useAppDispatch } from '../../Store/hook';
import { useState } from 'react';
import { DeleteOutlined , EditOutlined ,CloseOutlined , CheckOutlined} from '@ant-design/icons'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { SelectAdminProduct } from '../../Store/admin/admin-selector';
import { AddAdminProducts, AddProduct, AdminProduct, DeleteAdminProducts ,UpdateAdminProducts} from '../../Store/admin/admin-reducer';
import { DataType , EditableCellProps , SelectionGender , SelectionCategory} from './UltsTable';

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  inputType,
  children,
  record,
  ...restProps
}) => {

  const inputNode =inputType === 'number' ? (
    <InputNumber />
  ) : dataIndex === 'gender' ? (
    <Select value={record.gender}  options={SelectionGender.map((Gender) => 
      ({ label: Gender, value: Gender }))}/>
  ) : dataIndex === 'category' ? (
    <Select value={record.category} options={SelectionCategory.map((category) => 
      ({ label: category, value: category }))}/>
  ) : (
    <Input />
  );

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const AntDTable = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const AdminProducts : AdminProduct[] = useAppSelector(SelectAdminProduct);
  const DataWithKeys : DataType[]= AdminProducts.map((product) => ({
    ...product,
    key: product.id
  }));
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [editingKey, setEditingKey] = useState<React.Key | null>(null);
 
  const handleSelectChange = (Rows: React.Key[]) => {
    //console.log(Rows)
    setSelectedRowKeys(Rows);
  };    

  const handleSelectAll = (e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    const keys = checked ? DataWithKeys.map((product) => product.key) : [];
    //console.log(keys)
    setSelectedRowKeys(keys);
  };  

  const handleDeleteSelected = async() =>{
    try {
      await dispatch(DeleteAdminProducts(selectedRowKeys))
      setSelectedRowKeys([])
    } catch (error) {
      console.log('DELETE SELECTED ERROR')
    }

  }

  const handleDelete = async(key: React.Key[]) => {
    //console.log(key)
    await dispatch(DeleteAdminProducts(key))
  };

  const handleEdit = (record: Partial<DataType> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', price: 0, gender: '',category : '',image : '', ...record });
    setEditingKey(record.key);
  };

  const handleCancel = () => {
    setEditingKey(null);
  };


  const handleSave = async( record: AdminProduct) => {
    try {
      const values = await form.validateFields() as AddProduct
      const Update = { ...record, ...values }
      //console.log(values)
      await dispatch(UpdateAdminProducts(Update))
      setEditingKey(null);
    } catch (error) {
      console.log('SAVE ERROR')
    }

  };
  const handleAdd = async() => {
    try {
      await dispatch(AddAdminProducts({
        name: "Blank",
        price: 0,
        gender: "Blank",
        category: "Blank",
        image: "Blank",
      }))
    } catch (error) {
        console.log('ADD ERROR')
    }

  }
  const isEditing = (record: DataType) => record.key === editingKey;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
      width: '20%',
      editable : true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a: DataType, b: DataType) => a.price-b.price,
      width: '10%',
      editable : true,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a: DataType, b: DataType) => a.gender.localeCompare(b.gender),
      width: '10%',
      editable : true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      sorter: (a: DataType, b: DataType) => a.category.localeCompare(b.category),
      width: '10%',
      editable : true,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      width: '40%',
      editable : true,
    },
    {
      title: 'Action',
      width: '10%',
      render: (record: DataType) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm title="Sure to cancel?" onConfirm={handleCancel} okType="danger">
              <CloseOutlined/>
            </Popconfirm>
            <CheckOutlined onClick={() => handleSave(record)} style={{ marginLeft : '1.5rem'}}/> 
          </span>
        )
          :
          <Row>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete([record.key])} okType="danger">
              <DeleteOutlined/>
            </Popconfirm>
            <EditOutlined onClick={() => handleEdit(record)} style={{ marginLeft : '1.5rem'}}/>
          </Row>
        },
    },
];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        inputType: col.dataIndex === 'price' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div style={{width :'90%' ,margin: '0 auto', marginTop : '2rem'}}>
      <Row justify="space-between">
        <Col>
          <Checkbox checked={selectedRowKeys.length === DataWithKeys.length && DataWithKeys.length !== 0} onChange={handleSelectAll} style={{lineHeight: '32px' , marginLeft : '8px'}}>Select All</Checkbox>
          <Button  disabled={selectedRowKeys.length===0} onClick={handleDeleteSelected}>Delete</Button>
        </Col>
        <Col>
          <Button onClick={handleAdd}>Add</Button>
        </Col>
      </Row>

      <div style={{ width: '100%', margin: '1rem auto'}}>
        <Form form={form} component={false}>
          <Table components={{body: { cell: EditableCell }}}  pagination={{ defaultPageSize: 10,showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'],}}
            columns={mergedColumns} dataSource={DataWithKeys} rowSelection={{ selectedRowKeys,onChange :(rows)=> handleSelectChange(rows) }}
          />
        </Form>
      </div>
    </div>
  );
};