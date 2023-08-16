import React from 'react';
import { Droppable } from "react-beautiful-dnd";

const DropComponent = ({ children }) => {
    const [enabled, setEnabled] = React.useState(false);

    React.useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }

    return (
        <Droppable droppableId="table">
            {provided => (
                <tbody ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                </tbody>
            )}
        </Droppable>
    );
};

export default DropComponent;
