import './ErrorBlock.scss';
import Button from '../Button/Button';

function ErrorBlock() {
    return (
      <div className="error-block">
        <div className="error-block__title-block">
          <h1>404</h1>
          <h2>Error</h2>
        </div>
        <Button title="Go Back" lnk="/" cls="bg-green button__regular" />
      </div>
    ); 
}

export default ErrorBlock