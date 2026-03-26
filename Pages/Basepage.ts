import {Page} from '@playwright/test'

export class BasePage {

    readonly page:Page  //1

    constructor(page:Page)
    {
        this.page=page
    }


}