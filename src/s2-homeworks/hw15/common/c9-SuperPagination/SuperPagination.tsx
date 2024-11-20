import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)
    // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)
        console.log(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        const newCount = parseInt(event.target.value, 10)
        onChange(1, newCount)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{fontFamily: 'Roboto, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    '& .MuiPaginationItem-root': {
                        '&.Mui-selected': {
                            backgroundColor: '#0066CC',
                        },
                        '&:hover': {
                            backgroundColor: '#0066CC',
                        },
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                className={s.newSelect}
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: '4'},
                    {id: 7, value: '7'},
                    {id: 10, value: '10'},
                ]}
                onChange={onChangeSelect}
                onChangeOption={(newCount) => {
                    onChange(1, newCount)
                }}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
