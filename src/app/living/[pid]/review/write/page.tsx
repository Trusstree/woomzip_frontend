import React from 'react';


export default function Write() {

    return (
        <main>
            <div style={{fontSize:"25px", padding:"0", marginTop:"40px", color:"#101648"}}>후기쓰기 </div>

            <div style={{marginTop:"40px"}}>
                <div style={{color:"#101648", fontSize:"21px", fontWeight:"500"}}>키워드를 선택해주세요. (최대 5개 선택가능)</div>
            {/* 태그 제한 5개 구현 안딤 */}
                <div>
                    <div style={{width:"100%"}}>
                        <button type="button" className="btn btn-outline-success" style={{padding:"5px", margin:"5px"}}>집이 예뻐요</button>
                        <button type="button" className="btn btn-outline-success" style={{padding:"5px", margin:"5px"}}>깔끔해요</button>
                        <button type="button" className="btn btn-outline-success" style={{padding:"5px", margin:"5px"}}>주변 자연이 좋아요</button>
                        <button type="button" className="btn btn-outline-success" style={{padding:"5px", margin:"5px"}}>힐링하기 좋아요</button>
                        <button type="button" className="btn btn-outline-success" style={{padding:"5px", margin:"5px"}}>조용해요</button>
                        <button type="button" className="btn btn-outline-warning" style={{padding:"5px", margin:"5px"}}>가족과 다녀오기 좋아요</button>
                        <button type="button" className="btn btn-outline-warning" style={{padding:"5px", margin:"5px"}}>아이와 다녀오기 좋아요</button>
                        <button type="button" className="btn btn-outline-warning" style={{padding:"5px", margin:"5px"}}>친구와 다녀오기 좋아요</button>
                        <button type="button" className="btn btn-outline-primary" style={{padding:"5px", margin:"5px"}}>또 오고 싶어요</button>
                        <button type="button" className="btn btn-outline-primary" style={{padding:"5px", margin:"5px"}}>전원생활 경험하기 좋아요</button>
                        <button type="button" className="btn btn-outline-primary" style={{padding:"5px", margin:"5px"}}>전원생활을 하고 싶어졌어요</button>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"40px"}}>
                <div style={{color:"#101648", fontSize:"21px", fontWeight:"500"}}>사진을 첨부해주세요.</div>
            {/* 여기는 사진을 여러장 첨부할 수 있어야함. 일단 틀만 만들어 놓음 */}
            <div
                className='button'
                style={{width:"200px", height:"200px", backgroundColor:"lightGray", borderRadius:"20px", color:"white"}}>
                클릭해서 이미지 추가
            </div>
            </div>
        
            <div style={{marginTop:"40px"}}>
                <div style={{color:"#101648", fontSize:"21px", fontWeight:"500"}}>후기를 남겨주세요.</div>
            {/* 텍스트 첨부 */}
            <input style={{width:"100%", minHeight:"200px", borderRadius:"10px", borderColor:"lightGray"}}></input>
            </div>

            <div style={{marginTop:"40px"}}>
                <div style={{color:"#101648", fontSize:"21px", fontWeight:"500"}}>본 체험이 전원생활 선택에 있어서 조금이라도 도움이 되었나요?</div>
                <button type="button" className="btn btn-outline-success" style={{padding:"5px", margin:"5px"}}>네, 도움이 되었습니다.</button>
                <button type="button" className="btn btn-outline-danger" style={{padding:"5px", margin:"5px"}}>아뇨, 도움이 되지 않았습니다.</button>
            </div>
            
            <div
                className="button"
                style={{width:"400px", height:"50px", borderRadius:"10px", padding:"10px", marginBottom:"10px",backgroundColor:"#101648", color:"white", fontSize:"20px", fontWeight:"600", textAlign:"center"}}>
                리뷰 업로드 하기
            </div>

        </main>
    )
}