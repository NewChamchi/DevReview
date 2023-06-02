import React, { useState } from "react";
import styled from "styled-components";

const GroupExilePageComponent = (props) => {
    const {} = props;
    const dummyData = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Emma Watson" },
        { id: 3, name: "Robert Downey Jr." },
        { id: 4, name: "Scarlett Johansson" },
        { id: 5, name: "Chris Hemsworth" },
        { id: 6, name: "Tom Hiddleston" },
        { id: 7, name: "Chris Evans" },
        { id: 8, name: "Benedict Cumberbatch" },
        { id: 9, name: "Jennifer Lawrence" },
        { id: 10, name: "Leonardo DiCaprio" },
        { id: 11, name: "Brad Pitt" },
        { id: 12, name: "Tom Cruise" },
        { id: 13, name: "Meryl Streep" },
        { id: 14, name: "Sandra Bullock" },
        { id: 15, name: "Nicole Kidman" },
        //... add more members as needed
    ];

    const [selectedMembers, setSelectedMembers] = useState([]);

    const handleCheck = (id) => {
        if (selectedMembers.includes(id)) {
            setSelectedMembers(
                selectedMembers.filter((memberId) => memberId !== id)
            );
        } else {
            setSelectedMembers([...selectedMembers, id]);
        }
    };
    return (
        <GroupExilePageComponentBlock>
            <h2 className="ban-members-title">모임원 추방</h2>
            <div className="ban-members-wrapper">
                <div className="members-list">
                    {dummyData.map((member) => (
                        <div key={member.id} className="member-item">
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedMembers.includes(
                                        member.id
                                    )}
                                    onChange={() => handleCheck(member.id)}
                                />
                                <span></span>
                                {member.name}
                            </label>
                        </div>
                    ))}
                </div>
                <button
                    className="ban-button"
                    onClick={() => console.log(selectedMembers)}
                >
                    추방
                </button>
            </div>
        </GroupExilePageComponentBlock>
    );
};

const GroupExilePageComponentBlock = styled.div`
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 165px;
    .ban-members-wrapper {
        min-width: 400px;
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    .ban-members-title {
        text-align: center;
        margin-bottom: 20px;
    }
    .members-list {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        max-height: 50vh;
        overflow-y: auto;
    }

    .members-list::-webkit-scrollbar {
        width: 10px;
    }

    .members-list::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .members-list::-webkit-scrollbar-thumb {
        background: #888;
    }

    .members-list::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .member-item {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
    }
    .custom-checkbox {
        position: relative;
        display: block;
        padding-left: 25px;
        cursor: pointer;
        font-size: 16px;
        user-select: none;
    }
    .custom-checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    .custom-checkbox span {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
    .custom-checkbox:hover input ~ span {
        background-color: #ccc;
    }
    .custom-checkbox input:checked ~ span {
        background-color: #2196f3;
    }
    .custom-checkbox span:after {
        content: "";
        position: absolute;
        display: none;
    }
    .custom-checkbox input:checked ~ span:after {
        display: block;
    }
    .custom-checkbox span:after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    .ban-button {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: #ff4747;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .ban-button:hover {
        background-color: #ff2f2f;
    }
`;
export default GroupExilePageComponent;
