import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, {params}) => { //params get populate if you pass dynamic variables to the urls

    try{
        await connectToDB();
        

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');
        //console.log(prompts);
        return new Response(JSON.stringify(prompts), {status: 200});
        
    } catch (error) {
        return new Response("Failed to fetch prompts", {status: 500})
        console.log(error);
    }
}

//patch update
export const PATCH = async (request, {params}) => {
    const {prompt, tag} = await request.json();

    try{
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt){
            return new Response("Prompt not found", {status: 404});
        };

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), {status: 200});

    } catch(err){
        return new Response("Failed to update prompt", {status: 500})
        console.log(err);
    }
}


//delete

export const DELETE = async (request, {params}) => {
    try{
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt deleted", {status: 200});
        

    } catch(err){
        return new Response("Failed to delete prompt", {status: 500})
        console.log(err);
    }
}