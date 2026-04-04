import { useState, type ReactNode } from 'react'
import './Tabs.scss'

export type TabItem = {
    label: string
    content: ReactNode
}

type TabsProps = {
    tabs: TabItem[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <div className="tabs">
                {tabs.map((tab: TabItem, index: number) => (
                    <span
                        key={tab.label}
                        className={`p-1 ${
                            index === activeIndex ? 'active' : ''
                        }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </span>
                ))}
            </div>

            <div className="py-2">{tabs[activeIndex]?.content}</div>
        </div>
    )
}

export default Tabs
