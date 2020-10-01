import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório..." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img 
            src="https://avatars1.githubusercontent.com/u/10116449?s=460&u=aec8cb2ef606eb04426f0bb5d53f0291b4b38ecf&v=4"
            alt="Luis Felipe"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img 
            src="https://avatars1.githubusercontent.com/u/10116449?s=460&u=aec8cb2ef606eb04426f0bb5d53f0291b4b38ecf&v=4"
            alt="Luis Felipe"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img 
            src="https://avatars1.githubusercontent.com/u/10116449?s=460&u=aec8cb2ef606eb04426f0bb5d53f0291b4b38ecf&v=4"
            alt="Luis Felipe"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;