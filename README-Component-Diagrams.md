# 움집(Truss) Frontend 컴포넌트 다이어그램

이 프로젝트는 움집(Truss) 프론트엔드 애플리케이션의 컴포넌트 구조를 PlantUML을 사용하여 시각화한 다이어그램들을 포함합니다.

## 다이어그램 파일 목록

### 1. `component-diagram.puml`

- **목적**: 전체 컴포넌트 아키텍처 개요
- **내용**:
  - Next.js App Router 구조
  - 핵심 컴포넌트들
  - 페이지별 컴포넌트 그룹
  - 컴포넌트 간 의존성 관계

### 2. `detailed-component-diagram.puml`

- **목적**: 상세한 컴포넌트 구조 및 데이터 흐름
- **내용**:
  - 페이지별 상세 컴포넌트 구조
  - API 레이어와의 연동
  - 커스텀 훅과의 관계
  - 타입 시스템 연동

### 3. `data-flow-diagram.puml`

- **목적**: 데이터 흐름 및 상태 관리 구조
- **내용**:
  - 사용자 인터페이스 레이어
  - 상태 관리 레이어
  - API 레이어
  - 데이터 레이어
  - 타입 시스템

## 프로젝트 구조 분석

### 주요 아키텍처 특징

1. **Next.js App Router 기반**

   - 파일 시스템 기반 라우팅
   - 서버 컴포넌트와 클라이언트 컴포넌트 분리
   - 레이아웃 시스템 활용

2. **컴포넌트 구조**

   - **Core Components**: Header, Footer, Layout 등 핵심 컴포넌트
   - **Page Components**: 각 페이지별 전용 컴포넌트
   - **Utility Components**: 재사용 가능한 유틸리티 컴포넌트
   - **Custom Hooks**: 상태 관리 및 비즈니스 로직

3. **상태 관리**

   - URL 쿼리 파라미터를 통한 상태 동기화
   - React Context를 통한 전역 상태 관리
   - 커스텀 훅을 통한 로직 분리

4. **API 구조**
   - 도메인별 API 그룹화 (Product, News, Auth, General)
   - TypeScript 타입 시스템과 연동
   - 서버 액션을 통한 데이터 처리

### 주요 페이지별 컴포넌트

#### 홈페이지 (/)

- `HomeCategoryComponent`: 카테고리 섹션
- `HomeExpertComponent`: 전문가 섹션
- `HomePeopleComponent`: 사람들 섹션
- `HomeServiceComponent`: 서비스 소개
- `HomeTextComponent`: 텍스트 콘텐츠

#### 제품 페이지 (/product)

- `HouseCard`: 제품 카드
- `FilterButton`: 필터 버튼
- `FilterList`: 필터 목록
- `FilterBadge`: 활성 필터 표시
- `CategoryButton`: 카테고리 선택

#### 뉴스 페이지 (/news)

- `PostList`: 뉴스 목록
- `PostCard`: 뉴스 카드
- `Category`: 뉴스 카테고리
- `Icon`: 카테고리 아이콘

#### 문의 페이지 (/inquire)

- `InquiryComponent`: 문의 폼
- `Col3Button`, `Col4Button`, `Col6Button`: 레이아웃 버튼

## 다이어그램 사용법

### PlantUML 렌더링

1. **온라인 도구 사용**

   - [PlantUML Online Server](http://www.plantuml.com/plantuml/uml/)
   - 각 `.puml` 파일의 내용을 복사하여 붙여넣기

2. **VS Code 확장 프로그램**

   - PlantUML 확장 프로그램 설치
   - `.puml` 파일을 열고 미리보기

3. **로컬 환경**
   ```bash
   # PlantUML JAR 파일 다운로드 후
   java -jar plantuml.jar component-diagram.puml
   ```

### 다이어그램 해석

1. **컴포넌트 박스**: 각 React 컴포넌트를 나타냄
2. **화살표**: 컴포넌트 간 의존성 관계
3. **패키지**: 관련 컴포넌트들의 그룹화
4. **노트**: 주요 설명 및 특징

## 개발 가이드라인

### 컴포넌트 설계 원칙

1. **단일 책임 원칙**: 각 컴포넌트는 하나의 명확한 책임을 가짐
2. **재사용성**: 공통 컴포넌트는 `components` 디렉토리에 배치
3. **페이지별 분리**: 페이지 전용 컴포넌트는 해당 페이지 디렉토리에 배치
4. **타입 안전성**: TypeScript 타입 정의를 통한 안전성 확보

### 상태 관리 패턴

1. **URL 상태**: 필터링, 페이징 등은 URL 쿼리 파라미터로 관리
2. **폼 상태**: `useForm` 훅을 통한 폼 상태 관리
3. **전역 상태**: Context API를 통한 전역 상태 관리
4. **서버 상태**: 서버 액션을 통한 데이터 처리

## 유지보수

이 다이어그램들은 프로젝트 구조가 변경될 때마다 업데이트되어야 합니다:

1. 새로운 컴포넌트 추가 시
2. 컴포넌트 간 의존성 변경 시
3. 새로운 페이지 추가 시
4. API 구조 변경 시

## 참고 자료

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [PlantUML Documentation](https://plantuml.com/)
- [React Component Patterns](https://react.dev/learn/passing-props-to-a-component)
