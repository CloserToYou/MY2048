documentWidth = window.screen.availWidth;       //当前设备中可使用的尺寸(参照物)
gridContainerWidth = 0.92 * documentWidth;      //游戏大框格
cellSideLength = 0.18 * documentWidth;          //小方块
cellSpace = 0.04 * documentWidth;               //方块间距

function getPosTop(i,j)  {
    return cellSpace + i*(cellSpace+cellSideLength);
}

function getPosLeft(i,j) {
    return cellSpace + j*(cellSpace+cellSideLength);
}

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:return "#EEE4DA"; break;
        case 4:return "#EDE0C8"; break;
        case 8:return "#F2B179"; break;
        case 16:return "#F59563"; break;
        case 32:return "#F67C5F"; break;
        case 64:return "#F65E3B"; break;
        case 128:return "#EDCF72"; break;
        case 256:return "#EDCC61"; break;
        case 512:return "#9C0"; break;
        case 1024:return "#33B5E5"; break;
        case 2048:return "#09C"; break;
        case 4096:return "#A6C"; break;
        case 8192:return "#93C"; break;
    }
    return "black"
}

function getNumberColor(number) {
    if(number <= 4)
        return "#776e65";
    return "white";
}

function nospace() {
    for(var i = 0 ;i < 4 ; i ++ )
        for(var j = 0 ; j < 4 ; j ++ ){
            if(board[i][j]===0)
                return false;
        }
    return true;
}

function nomove(board){
    if( canMoveLeft(board) ||
        canMoveUp(board) ||
        canMoveRight(board) ||
        canMoveDown(board))
        return false;

    return true;
}

//①左边没有数字；②左边数字与自己相等。
function canMoveLeft(board) {
    for(var i = 0 ;i < 4 ; i ++ )
        for(var j = 1 ; j < 4 ; j ++ )
            if(board[i][j] != 0)
                if(board[i][j-1] == 0 || board[i][j-1] == board[i][j])
                    return true;
    return false;
}

function canMoveUp(board) {
    for(var i = 1 ;i < 4 ; i ++ )
        for(var j = 0 ; j < 4 ; j ++ )
            if(board[i][j] != 0)
                if(board[i-1][j] == 0 || board[i-1][j] == board[i][j])
                    return true;
    return false;
}

function canMoveRight(board) {
    for(var i = 0 ;i < 4 ; i ++ )
        for(var j = 0 ; j < 3 ; j ++ )
            if(board[i][j] != 0)
                if(board[i][j+1] == 0 || board[i][j+1] == board[i][j])
                    return true;
    return false;
}

function canMoveDown(board) {
    for(var i = 0 ;i < 3; i ++ )
        for(var j = 0 ; j < 4 ; j ++ )
            if(board[i][j] != 0)
                if(board[i+1][j] == 0 || board[i+1][j] == board[i][j])
                    return true;
    return false;
}

function noBlockHorizontal(row,col1,col2,board) {
    for(var i = col1+1; i < col2; i++ )
        if(board[row][i] != 0)
            return false;
    return true;
}

function noBlockVertical(row1,row2,col,board) {
    for(var i = row1+1; i < row2; i++ )
        if(board[i][col] != 0)
            return false;
    return true;
}

