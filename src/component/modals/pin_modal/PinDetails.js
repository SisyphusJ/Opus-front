/**
 * PinDetails.js
 * @description PinModal 의 공통 부분 중 상세 정보를 보여주는 컴포넌트
 */
import React from 'react';
import {Box, Flex, Heading} from "gestalt";
import {
    Accordion,
    AccordionDetails,
    AccordionGroup,
    AccordionSummary
} from "@mui/joy";
import Comments from "../../Comment";
import DeleteButton from "../../buttons/PinDeleteButton";
import ChangeButton from "../../buttons/PinChangeButton";
import NickLabel from "../../labels/PinNickLabel";
import PinImage from "./PinImage";
import {Background, CustomInput} from "../../CommonModal";
import styled from "styled-components";

const PinDetails = React.memo(({
    direction,
    pinData,
    isMyPin,
    isDelete,
    setIsDelete,
    deletePin,
    commentList,
    comment,
    setComment,
    handleOnKeyDown,
    handleDeleteConfirm
}) => {
    return (
        <Flex width={"100%"} height={"100%"} direction={direction}>
            <Box width={"100%"} height={"100%"}>
                <PinImage
                    src={pinData.imagePath}
                    alt={pinData.username}
                    isWide={pinData.width * 1 >= pinData.height * 1}
                />
            </Box>
            <Box paddingX={4} width={"100%"} height={"100%"} minHeight={650}>
                <Flex direction={"column"} justifyContent={"between"}
                      height={"100%"}>
                    <Flex>
                        <NickLabel>User {pinData.nickname}</NickLabel>
                        {isMyPin && (
                            <DeleteButton onClick={() => setIsDelete(
                                true)}> delete </DeleteButton>
                        )}
                    </Flex>

                    {isDelete && (
                        <Background>
                            <CheckSaveBox>
                                <Heading color={"dark"} size={"400"}>
                                    정말로 삭제하시겠습니까?
                                </Heading>
                                <Flex>
                                    <Box marginTop={6}>
                                        <ChangeButton
                                            onClick={handleDeleteConfirm}> 네</ChangeButton>
                                        <ChangeButton
                                            onClick={() => setIsDelete(false)}
                                            style={{marginLeft: "20px"}}
                                        >
                                            아니요
                                        </ChangeButton>
                                    </Box>
                                </Flex>
                            </CheckSaveBox>
                        </Background>
                    )}

                    <Box marginStart={3} marginBottom={5}>
                        <Label>Seed</Label>
                        {pinData.seed}
                    </Box>

                    <AccordionGroup disableDivider>
                        <Accordion sx={{marginBottom: "10px"}}>
                            <AccordionSummary>
                                <Label>Prompt</Label>
                            </AccordionSummary>
                            <AccordionDetails>{pinData.prompt}</AccordionDetails>
                        </Accordion>

                        <Accordion sx={{marginBottom: "20px"}}>
                            <AccordionSummary>
                                <Label>Negative Prompt</Label>
                            </AccordionSummary>
                            <AccordionDetails> {pinData.negativePrompt} </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>

                    <Label style={{marginLeft: "14px"}}>Comment</Label>
                    <CommentContainer>
                        <Box marginTop={3}>
                            <Comments comments={commentList}/>
                        </Box>
                    </CommentContainer>

                    <CustomInput
                        id="comment_field"
                        label="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        size="normal"
                        margin="dense"
                        onKeyDown={(e) => handleOnKeyDown(e.key)}
                        InputProps={{
                            sx: {
                                borderRadius: "1.5rem",
                                width: "100%",
                            },
                        }}
                    />
                </Flex>
            </Box>
        </Flex>
    );
});

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 650px;
  overflow: auto;
  z-index: 998;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

const CheckSaveBox = styled.div`
  width: 450px;
  height: 200px;
  border-radius: 1rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.h3`
  margin-bottom: 5px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 14px;
  width: 100%;
  height: 100%;
  //max-height: 250px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export default PinDetails;