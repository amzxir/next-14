'use client'

import { usePathname } from "next/navigation";

function DetailsBlog () {

    const pathName = usePathname()

    return(
        <div>
            <h2>Details Blog</h2>
            <p>{pathName}</p>
        </div>
    )
}

export default DetailsBlog;