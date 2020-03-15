export default class PagedList<T> {
    public hasNextPage: boolean = false;
    public isFirstPage: boolean = false;
    public isLastPage: boolean = false;
    public pageCount: number = 0;
    public pageNumber: number = 0;
    public totalItemCount: number = 0;
    public pagedList: Array<T> = new Array<T>();
}
