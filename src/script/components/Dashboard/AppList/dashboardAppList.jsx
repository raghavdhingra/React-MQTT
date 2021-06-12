import React from 'react';
import { APP_LIST } from './appList';
import Card from '../../../common/card/card';
import './dashboardAppList.scss';
import Header from '../../../common/header/header';
import Button from '../../../common/button/button';

const AppList = ({ className }) => {
  return (
    <div className={`app_list ${className || ''}`}>
      {APP_LIST.map((app, index) => (
        <Card key={app.key} isShadow variant={index % 3 === 0 ? 'dark' : ''}>
          <Header align='center'>{app.name}</Header>
          <Button title='Connect' />
        </Card>
      ))}
    </div>
  );
};

export default AppList;
