import { Content } from './content-notification';


describe("Notification content", () =>{

    it("should be able to create a notification content", () =>{
        const content = new Content('do you received a new notification')
    
        expect(content).toBeTruthy;
    
    });
    
    it("should be not able to create a notification with less than 5 characters", ()=>{
        expect(() =>new Content('aaa')).toThrow();
    })
    
    it("should be not able to create a notification with larger than 240 characters", ()=>{
        expect(() =>new Content('a'.repeat(241))).toThrow();
    })


})



