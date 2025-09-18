import React, { useState } from 'react';
import '../css/fitnessMenu.css';

export function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentItem, setCurrentItem] = useState({ direction: '', name: '', reps: '' });
    const [directions, setDirections] = useState(['胸肌', '二頭肌', '腿部']); // 初始的大方向列表

    const handleAddItem = () => {
        setCurrentItem({ direction: '', name: '', reps: '' });
        setShowModal(true);
    };

    const handleSaveItem = (item) => {
        setMenuItems([...menuItems, item]);
        setShowModal(false);
    };

    const handleAddDirection = (newDirection) => {
        setDirections([...directions, newDirection]);
    };

    return (
        <div className="fitness-menu">
            <h1>健身菜單</h1>
            {menuItems.length === 0 ? (
                <p>目前沒有健身項目，請新增項目。</p>
            ) : (
                menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <div>{item.direction} - {item.name}</div>
                        <div>{item.reps}</div>
                    </div>
                ))
            )}
            <button className="edit-menu-button" onClick={handleAddItem}>
                編輯菜單
            </button>
            {showModal && (
                <EditMenuModal
                    currentItem={currentItem}
                    directions={directions}
                    onSave={handleSaveItem}
                    onClose={() => setShowModal(false)}
                    onAddDirection={handleAddDirection}
                />
            )}
        </div>
    );
}

function EditMenuModal({ currentItem, directions, onSave, onClose, onAddDirection }) {
    const [item, setItem] = useState(currentItem);
    const [step, setStep] = useState(1);
    const [newDirection, setNewDirection] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(item);
    };

    const handleAddNewDirection = () => {
        if (newDirection) {
            onAddDirection(newDirection);
            setItem({ ...item, direction: newDirection });
            setNewDirection('');
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                {step === 1 && (
                    <>
                        <h2>選擇訓練大方向</h2>
                        <div className="form-group">
                            <label>大方向</label>
                            <select name="direction" value={item.direction} onChange={handleChange}>
                                <option value="">請選擇</option>
                                {directions.map((dir, index) => (
                                    <option key={index} value={dir}>{dir}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>新增大方向</label>
                            <input
                                type="text"
                                value={newDirection}
                                onChange={(e) => setNewDirection(e.target.value)}
                            />
                            <button onClick={handleAddNewDirection}>新增</button>
                        </div>
                        <button onClick={handleNextStep} disabled={!item.direction}>
                            下一步
                        </button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h2>新增動作</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>項目名稱</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={item.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>次數</label>
                                <input
                                    type="number"
                                    name="reps"
                                    value={item.reps}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit">確定修改</button>
                            <button type="button" onClick={onClose}>取消</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
