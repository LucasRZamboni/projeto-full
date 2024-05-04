import { db } from "../_lib/prisma";

const CategoryList = async () => {

    const categories = await db.category.findMany({})

    return <>
    {categories.map(category => <h1>{category.name}</h1>)}
    </>;
}
 
export default CategoryList;