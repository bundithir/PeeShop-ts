import { Button, Result } from 'antd';
import './Success-button-style.css'
import { useNavigate } from 'react-router-dom';
const Success = () => {
    const Navigate = useNavigate()
    return (
    <Result
      status="success"
      title="Successfully Purchased Product!"
      extra={[
        <Button  onClick={() => Navigate('/')} className='SuccessButton' type="primary" key="console" >
          Go Home page
        </Button>
      ]}
    />
  );
}  
  export default Success;