import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
padding-bottom: 100px;
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    max-width: 500px;
    width: 90%;
    overflow: hidden;  
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
  }

  .input,
  .textarea {
    margin-bottom: 15px;
    width: calc(100% - 30px);
    padding: 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    background-color: #f8f9fa;
    font-size: 16px;
    transition: border-color 0.3s ease;
  }

  .input::placeholder,
  .textarea::placeholder {
    color: #adb5bd;
  }

  .input:focus,
  .textarea:focus {
    outline: none;
    border-color: #007bff;
  }

  .textarea {
    height: 150px;
    resize: none;
  }

  .button {
    width: 100px;
    padding: 15px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #0056b3;
  }
  .contatos-container{
     background-color: #fff;
     width: 35%;
     text-align: center;
    
     margin: 20px;
     border-radius: 20px;
  li{
    list-style: none;
  }
  a{
    position: relative;
    right: 20px;
    color: black;
  }
   
  }
`;
