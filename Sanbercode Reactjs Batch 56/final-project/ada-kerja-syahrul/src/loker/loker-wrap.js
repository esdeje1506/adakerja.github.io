import React from "react";
import HandleTime from "../handle-time";
import LokerItem from "./loker-item";
import { Link } from 'react-router-dom';

const LokerWrap = (prop) => {
    let data = prop.dataFetch
    return (
        <>
        <div className="mt-16 p-1">
            <div className="ml-6 text-2xl font-semibold my-2.5">Lowongan Kerja {prop.home}</div>
            <div className={`mx-auto ${prop.posision === 'home' ? 'flex flex-wrap justify-between' :''} w-full`}>
                {data !== null && data.map((res, index) => {
                    return (
                        <>
                        <Link className="flex flex-col justify-between my-4 mx-auto min-h-52 w-[47%] min-w-80 rounded-md border bg-white p-1.5 shadow-md hover:shadow-lg hover:font-bold hover:bg-green-50" to={'/lowongan-kerja/'+(index+1)}>
                            <LokerItem co_img={res.company_image_url}
                                status={res.job_status}
                                time={<HandleTime timeFromData={(res.created_at)} />}
                                title={res.title} type={res.job_type}
                                tenure={res.job_tenure}
                                co_name={res.company_name}
                                education={res.education === undefined ? 'Semua Jurusan' : res.education}
                                co_city={res.company_city}
                                salary={`Rp. ${res.salary_min / 1000000} - ${res.salary_max / 1000000} Jt`}
                            /></Link>
                        </>
                    )
                })}
            </div>
            </div>
        </>
    )
}
export default LokerWrap