
function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
    return <div>
        <h2 className="font-bold text-base mb-8">آیا از حذف {resourceName} مطمعن هستید؟</h2>
        <div className="flex justify-between items-center gap-x-16"></div>
        <button
            className="btn btn--primary flex-1"
            onClick={onClose}
            disabled={disabled}
        >
            لغو
        </button>
        <button
            className="btn btn-danger flex-1 py-3"
            onClick={onConfirm}
            disabled={disabled}
        >
            تایید
        </button>
    </div>;
}

export default ConfirmDelete;