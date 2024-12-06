import React from 'react'

const TeamMember = ({ name, role, description }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-violet-50 font-medium mb-3">{role}</p>
            <p className="text-black-600 text-sm">{description}</p>
        </div>
    )
}

export default TeamMember
