import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
    {
        id : 1,
        message : "hi, I'm goona lgetting you today's schedule",
    },
    {
        id : 2,
        message : "it's lunch time!",
    },
    {
        id : 3,
        message : "it's about to start meeting",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications : [], // 앞으로 사용할 데이터를 state에 넣어서 초기화를 함
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reserveNotifications.length){
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        },1000);
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                    <Notification 
                        key = {notification.id}
                        id = {notification.id}
                    message={notification.message} 
                    />
                    );
                })}
            </div>
        )
    }
}
export default NotificationList;