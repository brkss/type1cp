export interface IBaseData {
    carbs: number;
    bg_before: number;
    bg_after?: number;
    insulin_taken?: number;
    correction?: number;
    hypoglycemia?: boolean;
    date: string;
}