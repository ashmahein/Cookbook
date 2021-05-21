export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public servings: number;

    constructor(name: string, description: string, imagePath: string, servings: number) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.servings = servings;
    }
}