import { supabase } from "./pabase"

export const getAllTodos = async () => {
    const todos = await supabase.from("Todo").select("*");
    return todos.data;
};

export const addTodo = async (title: string) => {
    await supabase.from("Todo").insert({ title: title })
};

export const deleteTodo = async (id: number) => {
    await supabase.from("Todo").delete().eq("id", id);
};