import React from 'react';
import Notification from "./Notification";

const reservedNotification = [
    {
        message : 'hi',
    },
    {
        message : 'hello',
    },
    {
        message : 'bye',
    }
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(()=> {
            if (notifications.length < reservedNotification.length) {
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);   
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification message ={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;