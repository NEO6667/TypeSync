interface DocumentsLayoutProps{
    children: React.ReactNode;
}

const DocumentsLayout = ( { children }: DocumentsLayoutProps) => {
    return ( 
        <div className="flex flex-col gap-4">
            <p>Document navbar</p>
            { children }
        </div>
     );
}
 
export default DocumentsLayout;