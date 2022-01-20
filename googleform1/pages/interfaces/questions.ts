export interface QuestionInterface{
    qType: string;
    title: string;
    desc: string;
    options: Array<QuestionOptionInterface>;
}

export interface QuestionOptionInterface{
    title: string;
    desc: string;
}