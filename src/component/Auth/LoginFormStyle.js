
  import style, {css} from 'styled-components';

function LoginFromStyle ()
{
    return css`
   
    .formm-container{
          background: linear-gradient(#E9374C,#D31128);
          font-family: 'Roboto', sans-serif;
          font-size: 0;
          padding: 0 15px;
          border: 1px solid #DC2036;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
      }
      .formm-container .formm-icon{
          color: #fff;
          font-size: 13px;
          text-align: center;
          text-shadow: 0 0 20px rgba(0,0,0,0.2);
          width: 50%;
          padding: 70px 0;
          vertical-align: top;
          display: inline-block;
      }
      .formm-container .formm-icon i{
          font-size: 124px;
          margin: 0 0 15px;
          display: block;
      }
      .formm-container .formm-icon .signup a{
          color: #fff;
          text-transform: capitalize;
          transition: all 0.3s ease;
      }
      .formm-container .formm-icon .signup a:hover{ text-decoration: underline; }
      .formm-container .formm-horizontal{
          background: rgba(255,255,255,0.99);
          width: 50%;
          padding: 60px 30px;
          margin: -20px 0;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
          display: inline-block;
      }
      .formm-container .title{
          color: #454545;
          font-size: 23px;
          font-weight: 900;
          text-align: center;
          text-transform: capitalize;
          letter-spacing: 0.5px;
          margin: 0 0 30px 0;
      }
      .formm-horizontal .form-group{
          background-color: rgba(255,255,255,0.15);
          margin: 0 0 15px;
          border: 1px solid #b5b5b5;
          border-radius: 20px;
      }
      .formm-horizontal .input-icon{
          color: #b5b5b5;
          font-size: 15px;
          text-align: center;
          line-height: 38px;
          height: 35px;
          width: 40px;
          vertical-align: top;
          display: inline-block;
      }
      .formm-horizontal .formm-control{
          color: #b5b5b5;
          background-color: transparent;
          font-size: 14px;
          letter-spacing: 1px;
          width: calc(100% - 55px);
          height: 33px;
          padding: 2px 10px 0 0;
          box-shadow: none;
          border: none;
          border-radius: 0;
          display: inline-block;
          transition: all 0.3s;
      }
      .formm-horizontal .formm-control:focus{
          box-shadow: none;
          border: none;
          outline: none;
          color : #000;
      }
      .formm-horizontal .formm-control::placeholder{
      
          font-size: 13px;
          text-transform: capitalize;
      }
      .formm-horizontal .btn{
          color: rgba(255,255,255,0.8);
          background: #E9374C;
          font-size: 15px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 100%;
          margin: 0 0 10px 0;
          border: none;
          border-radius: 20px;
          transition: all 0.3s ease;
      }
      .formm-horizontal .btn:hover,
      .formm-horizontal .btn:focus{
          color: #fff;
          background-color: #D31128;
          box-shadow: 0 0 5px rgba(0,0,0,0.5);
      }
      .formm-horizontal .forgot-pass{
          font-size: 12px;
          text-align: center;
          display: block;
          
      }
      .formm-horizontal .forgot-pass a{
        color: #f1e4e4;
          transition: all 0.3s ease;
      }
      .formm-horizontal .forgot-pass a:hover{
          color: #777;
          text-decoration: underline;
      }
      @media only screen and (max-width:576px){
          .formm-container{ padding-bottom: 15px; }
          .formm-container .formm-icon{
              width: 100%;
              padding: 20px 0;
          }
          .formm-container .formm-horizontal{
              width: 100%;
              margin: 0;
          }
      }
      .login-formm{
        margin-top: 246px;
      }
      
    `;
    
}

export const SectionWrapperStyled = style.div`
${LoginFromStyle};
`;
