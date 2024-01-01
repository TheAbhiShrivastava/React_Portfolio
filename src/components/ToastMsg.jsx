import React from 'react'
import './toast-msg.css'

export default function ToastMsg(props) {
    const toastMsg = props.msg
    const css = props.css

    return (
        <div>
            <div className={css}>
                <p>{toastMsg}</p>
                <span class="notification__progress"></span>
            </div>
        </div>
    )
}