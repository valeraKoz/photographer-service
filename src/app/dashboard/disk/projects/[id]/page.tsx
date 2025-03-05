'use client'

import {redirect, usePathname} from "next/navigation";
import {APP_PATH} from "@constants/urls";


export default function ProjectPageId() {
    const pathname = usePathname()
    redirect(`${APP_PATH.BASE_URL}/${pathname}/folder/`)
}