const Mutation = {
    async createItem(parent, args, ctx, info) {
        // TODO: Check if they are logged in
        const item = ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        return item;
    }
    // createDog(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     // create a dog
    //     const newDog = {name: args.name};
    //     global.dogs.push(newDog);
    //     return newDog;
    //     // create a dog!
    //     console.log(args);
    // }
};

module.exports = Mutation;
