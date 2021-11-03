import clsx from "clsx";
import "moment/locale/ko";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useRef, ReactNode } from "react";
import { alpha } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";
import {
	AppBar,
	CssBaseline,
	Drawer,
	Grow,
	List,
	MenuList,
	MenuItem,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Button,
	Popper,
	Typography,
	Toolbar,
	IconButton,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	TextField,
	DialogContentText,
	ClickAwayListener,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MoreIcon from "@mui/icons-material/MoreVert";
import HelpIcon from "@mui/icons-material/Help";
import theme from "services/index/utils/theme";

const drawerWidth = 240;

const useStyles = makeStyles(() =>
	createStyles({
		mainRoot: {
			display: "flex",
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			backgroundColor: alpha("#66A091", 1),
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerContainer: {
			overflow: "auto",
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		grow: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			display: "none",
			[theme.breakpoints.up("sm")]: {
				display: "block",
			},
			cursor: "pointer",
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: alpha(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: alpha(theme.palette.common.white, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
		sectionDesktop: {
			display: "none",
			[theme.breakpoints.up("md")]: {
				display: "flex",
			},
		},
		sectionMobile: {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
		timerPage: {
			padding: theme.spacing(2),
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			backgroundColor: "transparent",
			boxShadow: "none",
			fontFamily: "NanumSquare",
			color: "white",
		},
		timerPageError: {
			padding: theme.spacing(2),
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			backgroundColor: "transparent",
			boxShadow: "none",
			fontFamily: "NanumSquare",
			color: "red",
		},
	}),
);

interface Props {
	children?: ReactNode;
}

function AppBarLayout({ children }: Props) {
	const classes = useStyles();
	const router = useRouter();
	const anchorRef = useRef<HTMLButtonElement>(null);
	const anchorRef2 = useRef<HTMLButtonElement>(null);
	const [open, setOpen] = useState<boolean>(false);
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const [ConnectTime, setConnectTime] = useState<string>("1");
	const [isOpenExpDialog, setIsOpenExpDialog] = useState<boolean>(false);

	function movePage(path: string) {
		router.push(path);
	}

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleToggleDrawer = () => {
		setOpenDrawer((prevOpen) => !prevOpen);
	};

	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpen(false);
	};

	const handleCloseDrawer = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef2.current && anchorRef2.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpenDrawer(false);
	};

	const handleGoBack = () => {
		router.back();
	};

	const handleCloseAccount = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpen(false);
		movePage("/account");
	};

	const handleCloseHomeDrawer = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef2.current && anchorRef2.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpenDrawer(false);
		movePage("/");
	};

	const handleCloseBsDrawer = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef2.current && anchorRef2.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpenDrawer(false);
		movePage("/bs");
	};

	const handleCloseUserDrawer = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef2.current && anchorRef2.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpenDrawer(false);
		movePage("/user");
	};

	const handleCloseAPIDrawer = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef2.current && anchorRef2.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpenDrawer(false);
		movePage("/keys");
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	function handleListKeyDownDrawer(event: React.KeyboardEvent) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpenDrawer(false);
		}
	}

	return (
		<div className={clsx(classes.mainRoot)}>
			<CssBaseline />
			<AppBar position="fixed" className={clsx(classes.appBar)}>
				<Toolbar>
					<div className={clsx(classes.sectionDesktop)}>
						<IconButton color="inherit" aria-haspopup="true" onClick={handleGoBack}>
							<ArrowBackIcon />
						</IconButton>
					</div>

					<div className={clsx(classes.sectionDesktop)}>
						<Link href="/" as="/">
							<Typography className={clsx(classes.title)} variant="h6" noWrap>
								Test
							</Typography>
						</Link>
					</div>

					<div className={clsx(classes.sectionMobile)}>
						<div className={clsx(classes.sectionMobile)}>
							<IconButton color="inherit" aria-haspopup="true" onClick={handleGoBack}>
								<ArrowBackIcon />
							</IconButton>
						</div>
						<IconButton
							color="inherit"
							ref={anchorRef2}
							aria-controls={openDrawer ? "menu-home-grow" : undefined}
							aria-haspopup="true"
							onClick={handleToggleDrawer}
						>
							<MenuIcon />
						</IconButton>
						<div className={clsx(classes.grow)} />
						<Popper open={openDrawer} anchorEl={anchorRef2.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
									<Paper>
										<ClickAwayListener
											onClickAway={({ event }: any) => {
												handleCloseDrawer(event);
											}}
										>
											<MenuList autoFocusItem={openDrawer} id="menu-home-grow" onKeyDown={handleListKeyDownDrawer}>
												<MenuItem onClick={handleCloseHomeDrawer}>홈</MenuItem>
												<MenuItem onClick={handleCloseBsDrawer}>복지 기관</MenuItem>
												<MenuItem onClick={handleCloseUserDrawer}>관리자 계정 관리</MenuItem>
												<MenuItem onClick={handleCloseAPIDrawer}>API 키 발급 관리</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
					</div>

					<div className={clsx(classes.grow)} />

					<div className={clsx(classes.sectionDesktop)}>
						<IconButton
							color="inherit"
							onClick={() => {
								movePage("/account");
							}}
						>
							<AccountCircleIcon style={{ fontSize: 32 }} />
						</IconButton>
						<IconButton edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit" onClick={() => {}}>
							<ExitToAppIcon style={{ fontSize: 32 }} />
						</IconButton>
					</div>
					<div className={clsx(classes.sectionMobile)}>
						<IconButton color="inherit" ref={anchorRef} aria-controls={open ? "menu-list-grow" : undefined} aria-haspopup="true" onClick={handleToggle}>
							<MoreIcon />
						</IconButton>
						<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
									<Paper>
										<ClickAwayListener
											onClickAway={({ event }: any) => {
												handleClose(event);
											}}
										>
											<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
												<MenuItem onClick={handleCloseAccount}>계정</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
					</div>
				</Toolbar>
			</AppBar>

			<div className={clsx(classes.sectionDesktop)}>
				<Drawer
					className={clsx(classes.drawer)}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Toolbar />
					<div className={clsx(classes.drawerContainer)}>
						<List>
							<ListItem
								button
								key={"홈"}
								onClick={() => {
									movePage("/");
								}}
							>
								<ListItemIcon>
									<DashboardIcon style={{ fontSize: 28 }} />
								</ListItemIcon>
								<ListItemText primary={"홈"} />
							</ListItem>
						</List>

						<List style={{ position: "fixed", bottom: 0, width: drawerWidth }}>
							<ListItem button key={"도움말"} onClick={() => {}}>
								<ListItemIcon>
									<HelpIcon style={{ fontSize: 28 }} />
								</ListItemIcon>
								<ListItemText primary={"도움말"} />
							</ListItem>
						</List>
					</div>
				</Drawer>
			</div>
			<main className={clsx(classes.content)}>
				<Toolbar />
				<Dialog
					open={isOpenExpDialog}
					onClose={() => {
						setIsOpenExpDialog(false);
					}}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">재로그인</DialogTitle>
					<DialogContent>
						<DialogContentText>재로그인을 하게 되면 강제로 새로고침이 되오니 주의바랍니다.</DialogContentText>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							id="time"
							label="재접속시간지정"
							name="time"
							value={ConnectTime}
							onChange={({ target }: any) => {
								if (1 <= parseInt(target.value) && parseInt(target.value) <= 12) {
									setConnectTime(target.value);
								} else {
									if (target.value === "") {
										setConnectTime(target.value);
									}
								}
							}}
							placeholder={"재접속시간입력"}
							helperText={"1~12 까지만 입력이 가능합니다."}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => {}} color="primary">
							재로그인
						</Button>
						<Button
							onClick={() => {
								setIsOpenExpDialog(false);
							}}
							autoFocus
						>
							취소
						</Button>
					</DialogActions>
				</Dialog>
				{children}
			</main>
		</div>
	);
}

export default AppBarLayout;
