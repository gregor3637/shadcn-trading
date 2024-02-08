import React from 'react'
import { compressBigNumbers } from '@/utils/portfolio'
import InvestmentCardStatus from './investmentCardStatus'
import InvestmentCardIcon from './investmentCardIcon'

const mouseHandle = (event) => {
    const planetBackground = event.currentTarget
    const { left, top, width, height } =
        planetBackground.getBoundingClientRect()
    const { clientX, clientY } = event
    const mouseX = (clientX - left) / width
    const mouseY = (clientY - top) / height

    const backgroundPosX = mouseX * 50
    const backgroundPosY = mouseY * 50

    planetBackground.style.backgroundPosition = `${backgroundPosX}% ${backgroundPosY}%`
}



const InvestmentCard = ({
    name,
    date,
    icon,
    value,
    isActive = true,
    status,
    onClick,
}) => {
    return (
        <div
            className={`${isActive ? 'investment-card-active cursor-pointer' : 'investment-card-closed'}  2xs:w-[300] relative flex min-h-[200px] min-w-[200px]  max-w-[600px] flex-col justify-between rounded-lg p-3 shadow-sm
            2xs:bg-red-500
        
            `}
            onMouseMove={isActive ? mouseHandle : null}
            onClick={isActive ? onClick : null}
        >
            {status}
            {icon}
            <div>
                <h4
                    className="text-center text-5xl font-medium text-gray-900
                    sm:text-start"
                >
                    ${compressBigNumbers(value)}
                </h4>
            </div>
            <div
                className="flex flex-col items-center justify-between gap-2 overflow-hidden text-center
                 sm:flex-row sm:items-end sm:gap-6 sm:text-left"
            >
                <h5
                    className="text-xl font-medium text-gray-900 
                    sm:truncate sm:text-2xl"
                >
                    {name}
                </h5>
                <p
                    className={`text-sm font-medium ${isActive ? 'text-gray-300' : 'text-gray-800'}`}
                >
                    {date}
                </p>
            </div>
        </div>
    )
}

InvestmentCard.Status = InvestmentCardStatus
InvestmentCard.Icon = InvestmentCardIcon

export default InvestmentCard
