import React, { useState, useEffect } from 'react'
import ManageUser from './ManageUser'
import ManageShedule from './ManageShedule'
import './style.css'
export default function Manager() {
    const [typeManager, setTypeManager] = useState(0)

    useEffect(() => {
        setTypeManager(0)
    }, [setTypeManager])

    return (
        <div>
            <div className="manager">
                <div className="manager-control">
                    <button onClick={() => setTypeManager(0)}>Quản lý tài khoản</button>
                    <button onClick={() => setTypeManager(1)}>Quản lý và sắp xếp lịch làm việc</button>
                </div>
                <div>
                    {typeManager === 0 ? <ManageUser /> : ''}
                    {typeManager === 1 ? <ManageShedule /> : ''}
                </div>
            </div>
        </div>
    )
}
