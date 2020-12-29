import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    const limitPassWord = /.{7,}/;
    const styleEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    setBtn(styleEmail.test(email) && limitPassWord.test(passWord));
  }, [email, passWord]);

  function btnClick() {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/comidas');
    setBtn(false);
  }

  return (
    <div className="login">
      <div className="email">
        <input
          type="text"
          data-testid="email-input"
          placeholder="Informe o Email do Usuário"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </div>
      <div className="passWord">
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ ({ target }) => setPassWord(target.value) }
        />
      </div>
      <div className="btn">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !btn }
          onClick={ () => { btnClick(); } }
        >
          Entrar
        </button>
      </div>

    </div>
  );
}

Login.defaultProps = {
  history: '/',
};

Login.propTypes = {
  history: propTypes.shape(),
};

export default Login;
