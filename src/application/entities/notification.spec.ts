import { Content } from "./content-notification"
import { Notification } from "./notification"

describe("notification", () =>{
    it("should be possible to create a new notification", () =>{
        const notification = new Notification({
            content: new Content("Do you have a notification"),
            category: "social",
            recipientId: "recipientId randomUUID",
        })

        expect(notification).toBeTruthy();
    })

})