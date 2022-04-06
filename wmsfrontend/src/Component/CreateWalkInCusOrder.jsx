export default function CreateWalkInCusOrder() {
    return (
        <div>
            <button>3</button>
            <form action="">
                <div>
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Phone no</label>
                    <input type="tel" />
                </div>
                <div className="productSection">
                    <label>Select Product</label>
                    <select name="" id="">
                        <option value="" disabled selected key="">Please select a product</option>
                        <option value="" key="">Product A</option>
                        <option value="" key="">Product B</option>
                        <option value="" key="">Product C</option>
                        <option value="" key="">Product D</option>
                    </select>
                    <div>
                        <label>No of carton To be Bought</label>
                        <input type="number" name="" placeholder="If applicable ..." id="" />
                    </div>
                    <div>
                        <label>No of packs To Be Bought</label>
                        <input type="number" name="" placeholder="If applicable ..." id="" />
                    </div>
                    <div>
                        <label>No of pieces To Be Bought</label>
                        <input type="number" name="" placeholder="If applicable ..." id="" />
                    </div>
                    <div>
                        <label>Additional Information</label>
                        <textarea placeholder="If any other thing, enter here ..." cols="30" rows="3"></textarea>
                    </div>
                </div>
                <input type="button" value="Add" />
                <input type="button" value="Add More" />
                <input type="submit" value="Proceed" />
            </form>
        </div>
    );
}