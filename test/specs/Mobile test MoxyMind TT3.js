describe('Clock App Test', () => {

    it('Add city', async () => {

        await $('//*[@text="Clock"]').click();

        await $('//*[@content-desc="Add city"]').click();

        await $('//android.widget.EditText').setValue('Bratislava');

        await driver.pause(3000);

        await $('//*[contains(@text,"Slovakia")]').click();

        await driver.pause(2000);
    });


    it('Add alarm', async () => {

        await $('//*[@content-desc="Alarm"]').click();

        await $('//*[@content-desc="Add alarm"]').click();

        await driver.pause(2000);

        await $('//*[@content-desc="4 o\'clock"]').click();

        await $('//*[@content-desc="30 minutes"]').click();

        await $('//*[@resource-id="com.google.android.deskclock:id/material_timepicker_ok_button"]').click();

        await driver.pause(2000);

        const alarm = await $('//*[contains(@text,"4:30")]');

        await expect(alarm).toBeDisplayed();

    });

});