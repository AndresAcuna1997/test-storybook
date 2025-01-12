interface Props {
    title: string;
}

export const Card = ({ title }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}