import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'Cadastrar Vídeo',
        path: '/cadastro/video',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },

    {
        title: 'Cadastrar Categoria',
        path: '/cadastro/categoria',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
];