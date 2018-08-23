//This shows how to test a componet with state
//This also shows how to do multiple tests with-in a single describe
import NotificaitonsViewer from '../NotificationsViewer';
import renderer from 'react-test-renderer';
import React from 'react';
import delay from 'redux-saga';
import { renderers } from 'react-markdown';

//This sets up the mock for jest. The mocks must be in a folder call __mocks__ 
//One level below where we are currently at
jest.mock('../../services/NotificationsService');

const notificationsService = require('../../services/NotificationsService').default;

describe("The notification viewer", ()=>{
    beforeAll(()=>{
        notificationsService.__setCount(5);
    })

    it("should display the correct number of notifications", async()=>{
        const tree = renderer.create(<NotificaitonsViewer />)

        await delay();
        const instatnce = tree.root;
        const component = instatnce.findByProps({className: 'notifications'});
        const text = component.children[0];
        expect(text).toEqual("5 Notifications Awaiting!");
    }),

    it("should display Loading... when no notifications", async()=>{
        notificationsService.__setCount(-1);

        const tree = renderer.create(<NotificaitonsViewer />)

        await delay();
        const instatnce = tree.root;
        const component = instatnce.findByProps({className: 'notifications'});
        const text = component.children[0];
        expect(text).toEqual("Loading...");
    })
})