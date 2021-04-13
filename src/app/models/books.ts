export class Books {
  id!: number;
  title!: string;
  price!: number;
  category!: string[];
  categoryId!: number;
  authorId!: number;
  image!: string;
  constructor(
    id: number,
    title: string,
    price: number,
    category: string[],
    authorId: number,
    image: string,
    categoryId: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.authorId = authorId;
    this.image = image,
    this.categoryId = categoryId
  }

}
