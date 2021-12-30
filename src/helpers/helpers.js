export const getTextAndStylesOfTag = (tag, context) => {
    switch (tag) {
        case 'W':
            if (context === 'tag_bg') return '#ffcdd2';
            if (context === 'tag_chip_bg') return '#cb9ca1';
            if (context === 'uitext') return 'Work';
            break;
        case 'M':
            if (context === 'tag_bg') return '#c8e6c9';
            if (context === 'tag_chip_bg') return '#97b498';
            if (context === 'uitext') return 'Money';
            break;
        case 'T':
            if (context === 'tag_bg') return '#b2ebf2';
            if (context === 'tag_chip_bg') return '#81b9bf';
            if (context === 'uitext') return 'Todos';
            break;
        case 'R':
            if (context === 'tag_bg') return '#ffecb3';
            if (context === 'tag_chip_bg') return '#cbba83';
            if (context === 'uitext') return 'Reminders';
            break;
        default:
            if (context === 'tag_bg') return '#d7ccc8';
            if (context === 'tag_chip_bg') return '#a69b97';
            if (context === 'uitext') return 'Default';
            break;
    }
};

export const handleNoteBody = ({ body }) => {
    if (body.length > 100) {
        return body.slice(0, 300) + '...';
    }
    return body;
};
export const handleNoteTitle = ({ title }) => {
    if (title.length > 45) {
        return title.slice(0, 45) + '...';
    }
    return title;
};

export const getErrorTxtFromResponse = ({ data }) => {
    let errorTxt = '';
    let errorKeys = Object.keys(data);
    for (let key of errorKeys) {
        errorTxt += `- ${data[key]}\n`;
    }
    return errorTxt;
};
