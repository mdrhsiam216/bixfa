export interface RoomGuestOptionProps {
    index: number;
    adults: number;
    children: number;
    onChange: (adults: number, children: number) => void;
    onRemove: () => void;
    disableRemove?: boolean;
}