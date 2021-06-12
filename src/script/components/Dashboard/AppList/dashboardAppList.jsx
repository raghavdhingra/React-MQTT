import React from 'react';
import { useHistory } from 'react-router';
import { APP_LIST } from './appList';
import Card from '../../../common/card/card';
import Header from '../../../common/header/header';
import Button from '../../../common/button/button';
import './dashboardAppList.scss';

const AppList = ({ className }) => {
  const history = useHistory();

  return (
    <div className={`app_list ${className || ''}`}>
      {APP_LIST.map((app, index) => (
        <Card
          key={app.key}
          isShadow
          variant={index % 3 === 0 ? 'dark' : ''}
          isMinHeight
          backgroundImage={app.image}
        >
          <Header align='center'>{app.name}</Header>
          <Button title='Connect' onClick={() => history.push(app.href)} />
        </Card>
      ))}
    </div>
  );
};

export default AppList;
