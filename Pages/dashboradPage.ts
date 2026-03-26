import {Page, Locator, expect} from '@playwright/test'
import { BasePage } from './Basepage';

export class Dashboard extends BasePage{

    constructor(page:Page){
        super(page)
    }

    //locator
    dashboradUsername:Locator = this.page.locator('#username')

    //methods
    public async verifyDetails(){
        await this.dashboradUsername.fill("abhijit")
    }

}