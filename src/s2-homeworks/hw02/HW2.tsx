import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


// types
export type AffairPriorityType = 'low' | 'middle' | 'high'

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    let filteredAffairs: AffairType[]

    if (filter === 'all') {
        filteredAffairs = affairs
    } else {
        filteredAffairs = affairs.filter((a) => a.priority === filter)
    }
    return filteredAffairs

}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    let restAffairs: AffairType[]
    restAffairs = affairs.filter((a) => a._id !== _id)
    return restAffairs
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    filter={filter}          // ого useState передаем!
                    setFilter={setFilter}    // ого useState передаем!
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
