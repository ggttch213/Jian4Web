import React, { useState } from 'react';
import '../css/bmi.css'; // 确保你创建了相应的 CSS 文件以应用样式

export function Bmi() {
  const [date, setDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [records, setRecords] = useState([]);

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const handleAddRecord = () => {
    const newRecord = {
      date,
      height: parseFloat(height),
      weight: parseFloat(weight),
      bmi: calculateBMI(parseFloat(height), parseFloat(weight))
    };
    setRecords([...records, newRecord]);
    setDate('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className="bmi-body">
      <div className="content-container">
        <div className="form">
          <h2>BMI日記</h2>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            placeholder="日期" 
          />
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            placeholder="身高 (cm)" 
          />
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            placeholder="體重 (kg)" 
          />
          <button onClick={handleAddRecord}>完成</button>
        </div>
        <div className="records">
          <h2>BMI紀錄</h2>
          <table>
            <thead>
              <tr>
                <th>日期</th>
                <th>身高 (cm)</th>
                <th>體重 (kg)</th>
                <th>BMI</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.height}</td>
                  <td>{record.weight}</td>
                  <td>{record.bmi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
