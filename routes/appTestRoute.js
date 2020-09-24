
import test_controller from "../controllers/TestController.js";


export default function (app) {
    console.log(" appTestRoute ");
    app.post("/api/user/", async (req, res) => {
        console.log(" sss ", req.data);
        const result = await test_controller.getTestUser(req.data)
        res.json(result)
    });

}

