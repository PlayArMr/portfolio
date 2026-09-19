/**
 * PlayArMr — Shared Interactive Engine
 * Inspired by Max Leiter's desktop UI + Cyberpunk CLI
 */

(function () {
  'use strict';

  // --- 1. Theme Management ---
  // Rickroll Transition Sequence (20 lines x 27 cols Braille Matrix)
  const RICKROLL_FRAMES = [
    // 1. Raster Scan 30%
    "⣿⣿⣿⣿⣿⣿⣿⡿⢛⣛⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣌⡛⣀⢨⢍⡛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣡⠞⡸⠙⢷⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠋⣰⣾⡟⢰⡇⢼⡆⢹⡀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣏⢰⡿⠛⣉⣀⣻⣜⡿⢈⠃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡿⠟⠛⠛⣛⠛⠻⢼⢁⣾⠟⣋⣉⣭⣁⠨⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    // 2. Raster Scan 60%
    "⣿⣿⣿⣿⣿⣿⣿⡿⢛⣛⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣌⡛⣀⢨⢍⡛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣡⠞⡸⠙⢷⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠋⣰⣾⡟⢰⡇⢼⡆⢹⡀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣏⢰⡿⠛⣉⣀⣻⣜⡿⢈⠃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡿⠟⠛⠛⣛⠛⠻⢼⢁⣾⠟⣋⣉⣭⣁⠨⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣷⣦⡈⢻⣿⣿⣷⣦⠸⣡⣾⣿⣿⣿⣷⡝⣦⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⡀⣿⣿⠻⡿⢠⣿⣿⣿⣾⡍⠍⢷⣬⣅⠌⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣇⢹⣿⣿⣾⣿⣿⡘⢿⣿⣿⣿⣿⣿⣿⣷⡈⣿⣿⣿⢿⣿⣿⣿\n⣿⣿⣿⣿⣄⠻⢿⣿⠿⣿⠟⠶⣤⣍⡙⠻⣿⣿⣿⡇⢸⣿⠏⣤⢹⣿⣿\n⣷⡄⢤⣌⢹⠿⠲⣾⡆⡏⢰⡆⢿⣿⣿⠆⣹⣿⣿⠃⡾⢛⣓⠓⣈⠀⣸\n⣿⡇⢸⣿⣄⣰⡆⡿⠡⢟⡌⠻⣦⣬⣥⣴⣿⠿⢃⡼⠾⠿⢿⣷⠟⢠⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    // 3. Raster Scan 85%
    "⣿⣿⣿⣿⣿⣿⣿⡿⢛⣛⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣌⡛⣀⢨⢍⡛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣡⠞⡸⠙⢷⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠋⣰⣾⡟⢰⡇⢼⡆⢹⡀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣏⢰⡿⠛⣉⣀⣻⣜⡿⢈⠃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡿⠟⠛⠛⣛⠛⠻⢼⢁⣾⠟⣋⣉⣭⣁⠨⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣷⣦⡈⢻⣿⣿⣷⣦⠸⣡⣾⣿⣿⣿⣷⡝⣦⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⡀⣿⣿⠻⡿⢠⣿⣿⣿⣾⡍⠍⢷⣬⣅⠌⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣇⢹⣿⣿⣾⣿⣿⡘⢿⣿⣿⣿⣿⣿⣿⣷⡈⣿⣿⣿⢿⣿⣿⣿\n⣿⣿⣿⣿⣄⠻⢿⣿⠿⣿⠟⠶⣤⣍⡙⠻⣿⣿⣿⡇⢸⣿⠏⣤⢹⣿⣿\n⣷⡄⢤⣌⢹⠿⠲⣾⡆⡏⢰⡆⢿⣿⣿⠆⣹⣿⣿⠃⡾⢛⣓⠓⣈⠀⣸\n⣿⡇⢸⣿⣄⣰⡆⡿⠡⢟⡌⠻⣦⣬⣥⣴⣿⠿⢃⡼⠾⠿⢿⣷⠟⢠⣿\n⣿⣷⡌⠟⢻⠟⣰⣶⣿⣿⣿⣶⣤⣬⣉⣩⣤⡆⣿⣷⠞⠛⠒⠤⢶⣿⣿\n⡟⣱⣿⣿⣿⣿⣮⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⡿⢁⣴⣿⣿⣷⡄⢻⣿\n⠀⣿⣿⣿⣿⣿⣿⣿⣌⠻⣿⣿⣿⣛⡿⠟⡋⠞⣠⣾⣿⣿⣿⣿⡷⢘⣿\n⣆⠙⢿⣿⣿⣿⣿⣿⣿⣷⣦⣉⡉⣒⣀⣈⣤⣾⣿⣿⣿⣿⣿⡿⢃⣼⣿\n⣿⣷⣤⣈⡙⠛⠻⢿⣿⣿⣿⡿⠃⣷⠹⠿⣿⣿⠿⠿⠟⣛⣩⣴⣿⣿⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    // 4. Full Rickroll Braille Art
    "⣿⣿⣿⣿⣿⣿⣿⡿⢛⣛⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣌⡛⣀⢨⢍⡛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣡⠞⡸⠙⢷⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠋⣰⣾⡟⢰⡇⢼⡆⢹⡀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣏⢰⡿⠛⣉⣀⣻⣜⡿⢈⠃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡿⠟⠛⠛⣛⠛⠻⢼⢁⣾⠟⣋⣉⣭⣁⠨⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣷⣦⡈⢻⣿⣿⣷⣦⠸⣡⣾⣿⣿⣿⣷⡝⣦⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⡀⣿⣿⠻⡿⢠⣿⣿⣿⣾⡍⠍⢷⣬⣅⠌⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣇⢹⣿⣿⣾⣿⣿⡘⢿⣿⣿⣿⣿⣿⣿⣷⡈⣿⣿⣿⢿⣿⣿⣿\n⣿⣿⣿⣿⣄⠻⢿⣿⠿⣿⠟⠶⣤⣍⡙⠻⣿⣿⣿⡇⢸⣿⠏⣤⢹⣿⣿\n⣷⡄⢤⣌⢹⠿⠲⣾⡆⡏⢰⡆⢿⣿⣿⠆⣹⣿⣿⠃⡾⢛⣓⠓⣈⠀⣸\n⣿⡇⢸⣿⣄⣰⡆⡿⠡⢟⡌⠻⣦⣬⣥⣴⣿⠿⢃⡼⠾⠿⢿⣷⠟⢠⣿\n⣿⣷⡌⠟⢻⠟⣰⣶⣿⣿⣿⣶⣤⣬⣉⣩⣤⡆⣿⣷⠞⠛⠒⠤⢶⣿⣿\n⡟⣱⣿⣿⣿⣿⣮⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⡿⢁⣴⣿⣿⣷⡄⢻⣿\n⠀⣿⣿⣿⣿⣿⣿⣿⣌⠻⣿⣿⣿⣛⡿⠟⡋⠞⣠⣾⣿⣿⣿⣿⡷⢘⣿\n⣆⠙⢿⣿⣿⣿⣿⣿⣿⣷⣦⣉⡉⣒⣀⣈⣤⣾⣿⣿⣿⣿⣿⡿⢃⣼⣿\n⣿⣷⣤⣈⡙⠛⠻⢿⣿⣿⣿⡿⠃⣷⠹⠿⣿⣿⠿⠿⠟⣛⣩⣴⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣷⣶⣤⣉⠻⣿⣆⢹⣷⡄⢿⣶⣭⡛⠿⢿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣽⠟⢰⣿⣿⣦⣉⣉⣁⣴⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢥⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    // 5. Inversion Wave Upper (Row 7)
    "⠀⠀⠀⠀⠀⠀⠀⢀⡤⠤⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠳⢤⠿⡗⡲⢤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⣡⢇⣦⡈⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣴⠏⠁⢠⡏⢸⡃⢹⡆⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠰⡏⢀⣤⠶⠿⠄⠣⢀⡷⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⢀⣠⣤⣤⠤⣤⣄⡃⡾⠁⣠⠴⠶⠒⠾⣗⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠈⠙⢷⡄⠀⠀⠈⠙⣇⠞⠁⠀⠀⠀⠈⢢⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒\n⣿⣿⣿⣇⢹⣿⣿⣾⣿⣿⡘⢿⣿⣿⣿⣿⣿⣿⣷⡈⣿⣿⣿⢿⣿⣿⣿\n⣿⣿⣿⣿⣄⠻⢿⣿⠿⣿⠟⠶⣤⣍⡙⠻⣿⣿⣿⡇⢸⣿⠏⣤⢹⣿⣿\n⣷⡄⢤⣌⢹⠿⠲⣾⡆⡏⢰⡆⢿⣿⣿⠆⣹⣿⣿⠃⡾⢛⣓⠓⣈⠀⣸\n⣿⡇⢸⣿⣄⣰⡆⡿⠡⢟⡌⠻⣦⣬⣥⣴⣿⠿⢃⡼⠾⠿⢿⣷⠟⢠⣿\n⣿⣷⡌⠟⢻⠟⣰⣶⣿⣿⣿⣶⣤⣬⣉⣩⣤⡆⣿⣷⠞⠛⠒⠤⢶⣿⣿\n⡟⣱⣿⣿⣿⣿⣮⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⡿⢁⣴⣿⣿⣷⡄⢻⣿\n⠀⣿⣿⣿⣿⣿⣿⣿⣌⠻⣿⣿⣿⣛⡿⠟⡋⠞⣠⣾⣿⣿⣿⣿⡷⢘⣿\n⣆⠙⢿⣿⣿⣿⣿⣿⣿⣷⣦⣉⡉⣒⣀⣈⣤⣾⣿⣿⣿⣿⣿⡿⢃⣼⣿\n⣿⣷⣤⣈⡙⠛⠻⢿⣿⣿⣿⡿⠃⣷⠹⠿⣿⣿⠿⠿⠟⣛⣩⣴⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣷⣶⣤⣉⠻⣿⣆⢹⣷⡄⢿⣶⣭⡛⠿⢿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣽⠟⢰⣿⣿⣦⣉⣉⣁⣴⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢥⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    // 6. Inversion Wave Lower (Row 14)
    "⠀⠀⠀⠀⠀⠀⠀⢀⡤⠤⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠳⢤⠿⡗⡲⢤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⣡⢇⣦⡈⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣴⠏⠁⢠⡏⢸⡃⢹⡆⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠰⡏⢀⣤⠶⠿⠄⠣⢀⡷⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⢀⣠⣤⣤⠤⣤⣄⡃⡾⠁⣠⠴⠶⠒⠾⣗⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠈⠙⢷⡄⠀⠀⠈⠙⣇⠞⠁⠀⠀⠀⠈⢢⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⢿⠀⠀⣄⢀⡟⠀⠀⠀⠁⢲⣲⡈⠓⠺⣳⡀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠸⡆⠀⠀⠁⠀⠀⢧⡀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⠀⡀⠀⠀⠀\n⠀⠀⠀⠀⠻⣄⡀⠀⣀⠀⣠⣉⠛⠲⢦⣄⠀⠀⠀⢸⡇⠀⣰⠛⡆⠀⠀\n⠈⢻⡛⠳⡆⣀⣍⠁⢹⢰⡏⢹⡀⠀⠀⣹⠆⠀⠀⣼⢁⡤⠬⣬⠷⣿⠇\n⠀⢸⡇⠀⠻⠏⢹⢀⣞⡠⢳⣄⠙⠓⠚⠋⠀⣀⡼⢃⣁⣀⡀⠈⣠⡟⠀\n⠀⠈⢳⣠⡄⣠⠏⠉⠀⠀⠀⠉⠛⠓⠶⠖⠛⢹⠀⠈⣡⣤⣭⣛⡉⠀⠀\n⢠⠎⠀⠀⠀⠀⠑⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢀⡾⠋⠀⠀⠈⢻⡄⠀\n⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒\n⣆⠙⢿⣿⣿⣿⣿⣿⣿⣷⣦⣉⡉⣒⣀⣈⣤⣾⣿⣿⣿⣿⣿⡿⢃⣼⣿\n⣿⣷⣤⣈⡙⠛⠻⢿⣿⣿⣿⡿⠃⣷⠹⠿⣿⣿⠿⠿⠟⣛⣩⣴⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣷⣶⣤⣉⠻⣿⣆⢹⣷⡄⢿⣶⣭⡛⠿⢿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣽⠟⢰⣿⣿⣦⣉⣉⣁⣴⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢥⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    // 7. Full Bitwise-Inverted Rickroll
    "⠀⠀⠀⠀⠀⠀⠀⢀⡤⠤⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠳⢤⠿⡗⡲⢤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⣡⢇⣦⡈⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣴⠏⠁⢠⡏⢸⡃⢹⡆⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠰⡏⢀⣤⠶⠿⠄⠣⢀⡷⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⢀⣠⣤⣤⠤⣤⣄⡃⡾⠁⣠⠴⠶⠒⠾⣗⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠈⠙⢷⡄⠀⠀⠈⠙⣇⠞⠁⠀⠀⠀⠈⢢⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⢿⠀⠀⣄⢀⡟⠀⠀⠀⠁⢲⣲⡈⠓⠺⣳⡀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠸⡆⠀⠀⠁⠀⠀⢧⡀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⠀⡀⠀⠀⠀\n⠀⠀⠀⠀⠻⣄⡀⠀⣀⠀⣠⣉⠛⠲⢦⣄⠀⠀⠀⢸⡇⠀⣰⠛⡆⠀⠀\n⠈⢻⡛⠳⡆⣀⣍⠁⢹⢰⡏⢹⡀⠀⠀⣹⠆⠀⠀⣼⢁⡤⠬⣬⠷⣿⠇\n⠀⢸⡇⠀⠻⠏⢹⢀⣞⡠⢳⣄⠙⠓⠚⠋⠀⣀⡼⢃⣁⣀⡀⠈⣠⡟⠀\n⠀⠈⢳⣠⡄⣠⠏⠉⠀⠀⠀⠉⠛⠓⠶⠖⠛⢹⠀⠈⣡⣤⣭⣛⡉⠀⠀\n⢠⠎⠀⠀⠀⠀⠑⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢀⡾⠋⠀⠀⠈⢻⡄⠀\n⣿⠀⠀⠀⠀⠀⠀⠀⠳⣄⠀⠀⠀⠤⢀⣠⢴⣡⠟⠁⠀⠀⠀⠀⢈⡧⠀\n⠹⣦⡀⠀⠀⠀⠀⠀⠀⠈⠙⠶⢶⠭⠿⠷⠛⠁⠀⠀⠀⠀⠀⢀⡼⠃⠀\n⠀⠈⠛⠷⢦⣤⣄⡀⠀⠀⠀⢀⣼⠈⣆⣀⠀⠀⣀⣀⣠⠤⠖⠋⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠈⠉⠛⠶⣄⠀⠹⡆⠈⢻⡀⠉⠒⢤⣀⡀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠂⣠⡏⠀⠀⠙⠶⠶⠾⠋⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    // 8. Matrix Dissolve Settle
    "⠀⠀⠀⠀⠀⠀⠀⠀⡤⠀⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⠀⡗⠀⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠞⠀⢇⠀⡈⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣴⠀⠁⠀⡏⠀⡃⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠰⠀⢀⠀⠶⠀⠄⠀⢀⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⣠⠀⣤⠀⣤⠀⡃⠀⠁⠀⠴⠀⠒⠀⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠈⠀⢷⠀⠀⠀⠈⠀⣇⠀⠁⠀⠀⠀⠈⠀⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⢿⠀⠀⠀⢀⠀⠀⠀⠀⠀⢲⠀⡈⠀⠺⠀⡀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⣉⠀⠲⠀⣄⠀⠀⠀⢸⠀⠀⠀⠛⠀⠀⠀\n⠈⠀⡛⠀⡆⠀⣍⠀⢹⠀⡏⠀⡀⠀⠀⠀⠆⠀⠀⠀⢁⠀⠬⠀⠷⠀⠇\n⠀⢸⠀⠀⠀⠏⠀⢀⠀⡠⠀⣄⠀⠓⠀⠋⠀⣀⠀⢃⠀⣀⠀⠈⠀⡟⠀\n⠀⠀⢳⠀⡄⠀⠏⠀⠀⠀⠀⠀⠛⠀⠶⠀⠛⠀⠀⠀⣡⠀⣭⠀⡉⠀⠀\n⠀⠎⠀⠀⠀⠀⠀⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⡾⠀⠀⠀⠈⠀⡄⠀\n⣿⠀⠀⠀⠀⠀⠀⠀⠳⠀⠀⠀⠀⠀⢀⠀⢴⠀⠟⠀⠀⠀⠀⠀⢈⠀⠀\n⠀⣦⠀⠀⠀⠀⠀⠀⠀⠈⠀⠶⠀⠭⠀⠷⠀⠁⠀⠀⠀⠀⠀⢀⠀⠃⠀\n⠀⠀⠛⠀⢦⠀⣄⠀⠀⠀⠀⠀⣼⠀⣆⠀⠀⠀⣀⠀⣠⠀⠖⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠉⠀⠶⠀⠀⠀⡆⠀⢻⠀⠉⠀⢤⠀⡀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⣠⠀⠀⠀⠙⠀⠶⠀⠋⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
  ];

  let isThemeTransitioning = false;

  function initTheme() {
    const saved = localStorage.getItem('playarmr-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeUI(saved);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('playarmr-theme', theme);
    updateThemeUI(theme);
  }

  function playRickrollTransition(fromTheme, toTheme) {
    isThemeTransitioning = true;

    const overlay = document.createElement('div');
    overlay.id = 'theme-transition-overlay';
    overlay.className = `theme-transition-overlay from-${fromTheme}`;
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-live', 'polite');
    overlay.setAttribute('aria-label', `Switching to ${toTheme} theme`);

    overlay.innerHTML = `
      <div class="theme-transition-scanlines"></div>
      <div class="theme-transition-box">
        <div class="theme-transition-hud hud-top">
          <span class="hud-tag">POLARITY_INVERSION</span>
          <span class="hud-fps">24_FPS</span>
          <span class="hud-rom">RICKROLL.ROM</span>
        </div>
        <pre class="theme-transition-ascii" id="theme-transition-pre" aria-hidden="true"></pre>
        <div class="theme-transition-hud hud-bottom">
          <span class="hud-telemetry" id="theme-transition-telemetry">[ ${fromTheme === 'dark' ? '0x00 ➔ 0xFF' : '0xFF ➔ 0x00'} ] NEVER GONNA GIVE YOU UP</span>
          <span class="hud-skip">CLICK OR PRESS ANY KEY TO SKIP</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const preEl = overlay.querySelector('#theme-transition-pre');
    const telEl = overlay.querySelector('#theme-transition-telemetry');

    let currentFrame = 0;
    if (preEl) {
      preEl.textContent = RICKROLL_FRAMES[0];
    }

    let cleanedUp = false;
    function cleanup(forceApply = false) {
      if (cleanedUp) return;
      cleanedUp = true;
      clearInterval(frameInterval);
      window.removeEventListener('keydown', onKeyDown, true);
      overlay.removeEventListener('click', onClick);

      if (forceApply) {
        applyTheme(toTheme);
      }

      overlay.style.opacity = '0';
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.remove();
        }
        isThemeTransitioning = false;
      }, 150);
    }

    function onKeyDown(e) {
      if (e.key === 'F5' || e.key === 'F12' || (e.ctrlKey && e.key.toLowerCase() === 'r') || (e.metaKey && e.key.toLowerCase() === 'r')) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      cleanup(true);
    }

    function onClick() {
      cleanup(true);
    }

    window.addEventListener('keydown', onKeyDown, true);
    overlay.addEventListener('click', onClick);

    const frameInterval = setInterval(() => {
      currentFrame++;

      // When the wave passes (Frame 6), execute theme switch and invert overlay
      if (currentFrame === 6) {
        applyTheme(toTheme);
        overlay.classList.add('inverted');
        if (telEl) {
          telEl.textContent = `[ ${toTheme.toUpperCase()} MODE ACTIVE ] NEVER GONNA LET YOU DOWN`;
        }
      }

      if (currentFrame < RICKROLL_FRAMES.length) {
        if (preEl) {
          preEl.textContent = RICKROLL_FRAMES[currentFrame];
        }
      } else {
        cleanup(false);
      }
    }, 65);
  }

  function toggleTheme() {
    if (isThemeTransitioning) return;

    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';

    // If user prefers reduced motion, toggle immediately without animation
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      applyTheme(next);
      return;
    }

    playRickrollTransition(current, next);
  }

  function updateThemeUI(theme) {
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (icon) {
      if (theme === 'light') {
        // Sun icon for light mode
        icon.innerHTML = `<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>`;
      } else {
        // Moon icon for dark mode
        icon.innerHTML = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>`;
      }
    }
    if (label) {
      label.textContent = theme;
    }
  }

  // --- 2. CRT Scanlines Management ---
  function initCRT() {
    const saved = localStorage.getItem('playarmr-crt');
    const isActive = saved === null ? true : saved === 'true';
    if (isActive) {
      document.body.classList.add('crt-active');
    } else {
      document.body.classList.remove('crt-active');
    }
    updateCRTUI(isActive);
  }

  function toggleCRT() {
    const isActive = document.body.classList.toggle('crt-active');
    localStorage.setItem('playarmr-crt', isActive);
    updateCRTUI(isActive);
  }

  function updateCRTUI(isActive) {
    const btn = document.getElementById('crt-toggle-btn');
    if (btn) {
      btn.innerHTML = `<span style="opacity:0.7">CRT:</span> ${isActive ? '<span style="color:var(--green)">ON</span>' : '<span style="color:var(--fg-dim)">OFF</span>'}`;
    }
  }

  // --- 3. Menubar Live Clock (IST) ---
  function initClock() {
    const clockEl = document.getElementById('menubar-clock');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      // IST is UTC+5:30
      const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utcMs + (330 * 60000));
      const pad = (n) => String(n).padStart(2, '0');
      const timeStr = `${pad(istDate.getHours())}:${pad(istDate.getMinutes())}:${pad(istDate.getSeconds())} IST`;
      clockEl.textContent = timeStr;
    }

    update();
    setInterval(update, 1000);
  }

  // --- 4. Obfuscated Email Helper ---
  function getEmail() {
    const user = 'dev.playarmr';
    const domain = 'protonmail.com';
    return `${user}@${domain}`;
  }

  function initEmailTargets() {
    const email = getEmail();
    document.querySelectorAll('[data-email-target]').forEach((el) => {
      if (el.tagName.toLowerCase() === 'a') {
        el.href = `mailto:${email}`;
      }
      el.textContent = email;
    });
  }

  function copyEmail() {
    const email = getEmail();
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied to clipboard: ' + email);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  }

  // --- 5. Quick Toast Notification ---
  function showToast(msg) {
    let toast = document.getElementById('system-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'system-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 10005;
        background: var(--bg-window);
        border: 1px solid var(--border-hover);
        color: var(--fg);
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        padding: 0.65rem 1.1rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 10px var(--selection);
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.25s ease;
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3200);
  }

  // --- 6. About Modal ---
  function openAboutModal() {
    const modal = document.getElementById('about-modal-overlay');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeAboutModal() {
    const modal = document.getElementById('about-modal-overlay');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  function runTerminalCommand(cmd) {
    if (window.PlayArMr && typeof window.PlayArMr.runCliCommand === 'function') {
      window.PlayArMr.runCliCommand(cmd);
    } else {
      window.location.href = `./index.html?cmd=${encodeURIComponent(cmd)}`;
    }
  }

  // --- 7. Command Palette Database & Modal ---
  const PALETTE_DATA = [
    { category: 'Navigation', title: '~ (Desktop Home)', url: './index.html', icon: '⌂', badge: 'Page' },
    { category: 'Navigation', title: '~/blog (All Writing)', url: './page2.html', icon: '◈', badge: 'Page' },
    { category: 'Navigation', title: 'Recursive Abstraction', url: './recursive-abstraction.html', icon: '✦', badge: 'Essay' },
    { category: 'Navigation', title: 'A Solution to Data Degradation', url: './a-solution-to-data-degradation.html', icon: '✦', badge: 'Essay' },
    { category: 'Navigation', title: 'ABOUT.md (Whoami)', action: openAboutModal, icon: 'ℹ', badge: 'Modal' },

    { category: 'Projects', title: 'citygen (Python · OpenStreetMap Maps)', url: 'https://github.com/PlayArMr/citygen', icon: '⬡', badge: 'GitHub ↗' },
    { category: 'Projects', title: 'Project Rivendell (C Terminal Text RPG)', url: 'https://github.com/PlayArMr/Project_Rivendell', icon: '⬡', badge: 'GitHub ↗' },

    { category: 'Social & Connect', title: 'GitHub (@PlayArMr)', url: 'https://github.com/PlayArMr', icon: '↗', badge: 'External' },
    { category: 'Social & Connect', title: 'LinkedIn (/in/kulkarni-mrudul)', url: 'https://linkedin.com/in/kulkarni-mrudul', icon: '↗', badge: 'External' },
    { category: 'Social & Connect', title: 'X / Twitter (@PlayArMr2)', url: 'https://x.com/PlayArMr2', icon: '↗', badge: 'External' },
    { category: 'Social & Connect', title: 'Email (dev.playarmr@protonmail.com)', action: copyEmail, icon: '✉', badge: 'Copy' },

    { category: 'System Actions', title: 'fastfetch (System Specs & Host Info)', action: () => runTerminalCommand('fastfetch'), icon: '⚡', badge: 'CLI' },
    { category: 'System Actions', title: 'Toggle Theme (Dark / Light)', action: toggleTheme, icon: '◐', badge: 'Action' },
    { category: 'System Actions', title: 'Toggle CRT Scanline Effect', action: toggleCRT, icon: '📺', badge: 'Action' },
    { category: 'System Actions', title: 'Copy Email to Clipboard', action: copyEmail, icon: '📋', badge: 'Action' }
  ];

  let selectedIndex = 0;
  let filteredItems = [];

  function openPalette() {
    const overlay = document.getElementById('palette-overlay');
    const input = document.getElementById('palette-input');
    if (!overlay || !input) return;

    overlay.classList.add('open');
    input.value = '';
    renderPaletteResults('');
    input.focus();
  }

  function closePalette() {
    const overlay = document.getElementById('palette-overlay');
    if (overlay) {
      overlay.classList.remove('open');
    }
  }

  function renderPaletteResults(query) {
    const resultsContainer = document.getElementById('palette-results');
    if (!resultsContainer) return;

    const q = query.trim().toLowerCase();
    filteredItems = PALETTE_DATA.filter(item => {
      if (!q) return true;
      return item.title.toLowerCase().includes(q) ||
             item.category.toLowerCase().includes(q) ||
             (item.badge && item.badge.toLowerCase().includes(q));
    });

    if (filteredItems.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--fg-dim); font-size: 0.8125rem;">
          No matching items found for "${escapeHtml(query)}"
        </div>
      `;
      return;
    }

    selectedIndex = 0;
    let html = '';
    let currentCategory = '';

    filteredItems.forEach((item, index) => {
      if (item.category !== currentCategory) {
        currentCategory = item.category;
        html += `<div class="palette-category">${escapeHtml(currentCategory)}</div>`;
      }
      const isSelected = index === selectedIndex;
      html += `
        <div class="palette-item ${isSelected ? 'selected' : ''}" data-index="${index}">
          <div class="palette-item-left">
            <span style="color:var(--cyan); width: 18px; text-align:center;">${item.icon || '•'}</span>
            <span>${escapeHtml(item.title)}</span>
          </div>
          <span class="palette-item-badge">${escapeHtml(item.badge || '')}</span>
        </div>
      `;
    });

    resultsContainer.innerHTML = html;

    // Attach click listeners to items
    resultsContainer.querySelectorAll('.palette-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        executePaletteItem(idx);
      });
      el.addEventListener('mouseenter', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        updateSelection(idx);
      });
    });
  }

  function updateSelection(newIdx) {
    if (filteredItems.length === 0) return;
    selectedIndex = Math.max(0, Math.min(newIdx, filteredItems.length - 1));
    const items = document.querySelectorAll('#palette-results .palette-item');
    items.forEach((el, idx) => {
      if (idx === selectedIndex) {
        el.classList.add('selected');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('selected');
      }
    });
  }

  function executePaletteItem(index) {
    const item = filteredItems[index];
    if (!item) return;
    closePalette();

    if (item.action) {
      item.action();
    } else if (item.url) {
      if (item.url.startsWith('http')) {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = item.url;
      }
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // --- 8. Global Keyboard Listeners ---
  function initKeyboard() {
    window.addEventListener('keydown', (e) => {
      // ⌘K or Ctrl+K or / (when not typing in an input)
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      const isSlash = e.key === '/' && !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase());

      if (isCmdK || isSlash) {
        e.preventDefault();
        openPalette();
        return;
      }

      // Escape key closes modals
      if (e.key === 'Escape') {
        closePalette();
        closeAboutModal();
        return;
      }

      // Palette Navigation
      const palette = document.getElementById('palette-overlay');
      if (palette && palette.classList.contains('open')) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          updateSelection(selectedIndex + 1);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          updateSelection(selectedIndex - 1);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          executePaletteItem(selectedIndex);
        }
      }
    });

    const paletteInput = document.getElementById('palette-input');
    if (paletteInput) {
      paletteInput.addEventListener('input', (e) => {
        renderPaletteResults(e.target.value);
      });
    }

    // Backdrop click handlers
    const paletteOverlay = document.getElementById('palette-overlay');
    if (paletteOverlay) {
      paletteOverlay.addEventListener('click', (e) => {
        if (e.target === paletteOverlay) closePalette();
      });
    }

    const aboutOverlay = document.getElementById('about-modal-overlay');
    if (aboutOverlay) {
      aboutOverlay.addEventListener('click', (e) => {
        if (e.target === aboutOverlay) closeAboutModal();
      });
    }
  }

  // --- 8. Ambient Constellation Grid Background ---
  function initConstellationGrid() {
    let canvas = document.getElementById('constellation-grid-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'constellation-grid-canvas';
      canvas.className = 'constellation-grid-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      radius: 175,
      radiusSq: 175 * 175,
    };

    let nodes = [];
    let currentWidth = window.innerWidth;
    let currentHeight = window.innerHeight;

    function initNodes() {
      nodes = [];
      const isMobile = width < 768;
      const spacing = isMobile ? 56 : 70; // Well-spaced constellation density
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          nodes.push({
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            baseX: x,
            baseY: y,
            radius: Math.random() * 0.8 + 1.0,
            label: (i * 7).toString(16).toUpperCase() + ':' + (j * 11).toString(16).toUpperCase(),
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    function handleResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Avoid re-initialization on mobile address bar collapse/expand
      const isMinorMobileHeightChange =
        newWidth === currentWidth && Math.abs(newHeight - currentHeight) < 140;

      if (isMinorMobileHeightChange && nodes.length > 0) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        height = newHeight;
        canvas.height = height * dpr;
        canvas.style.height = height + 'px';
        ctx.scale(dpr, dpr);
        return;
      }

      currentWidth = newWidth;
      currentHeight = newHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = newWidth;
      height = newHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
      mouse.radius = width < 768 ? 125 : 175;
      mouse.radiusSq = mouse.radius * mouse.radius;
      initNodes();
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function handleTouchMove(e) {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }

    function handleTouchStart(e) {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;
      }
    }

    function handleTouchEnd() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    let lastTime = performance.now();

    function render(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      mouse.vx = (mouse.x - mouse.prevX) / (dt * 1000 || 1);
      mouse.vy = (mouse.y - mouse.prevY) / (dt * 1000 || 1);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
      const bgColor = isDarkMode ? '#09090B' : '#FAFBFC';
      const cyanLine = '6, 182, 212';
      const purpleAccent = '168, 85, 247';
      const accentColor = isDarkMode ? cyanLine : '59, 130, 246';
      const nodeIdleColor = isDarkMode ? cyanLine : '148, 163, 184';

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      // Node Physics Engine (Hooke's Law Spring-Mass-Damping system)
      const SPRING_K = 14;
      const DAMPING = 0.86;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.pulse += dt * 1.1;

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouse.radiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const power = 1 - dist / mouse.radius;
          const cappedSpeed = Math.min(speed, 45);
          const force = power * (440 + cappedSpeed * 24);
          const angle = Math.atan2(dy, dx);

          n.vx -= Math.cos(angle) * force * dt;
          n.vy -= Math.sin(angle) * force * dt;
        }

        const homeDx = n.baseX - n.x;
        const homeDy = n.baseY - n.y;

        n.vx += homeDx * SPRING_K * dt;
        n.vy += homeDy * SPRING_K * dt;

        n.vx *= DAMPING;
        n.vy *= DAMPING;

        n.x += n.vx * dt * 60;
        n.y += n.vy * dt * 60;
      }

      // Draw Connections (Spatial Culling for 60/120fps performance)
      const isMobile = width < 768;
      const MAX_CONN_DIST = isMobile ? 82 : 98;
      const MAX_CONN_DIST_SQ = MAX_CONN_DIST * MAX_CONN_DIST;
      ctx.lineWidth = 0.85;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          if (n2.baseX - n.baseX > MAX_CONN_DIST + 40) break;

          const ndx = n.x - n2.x;
          const ndy = n.y - n2.y;
          const distSq = ndx * ndx + ndy * ndy;

          if (distSq < MAX_CONN_DIST_SQ) {
            const nDist = Math.sqrt(distSq);
            // Clearly visible yet subtle ambient lines
            const baseAlpha = (1 - nDist / MAX_CONN_DIST) * (isDarkMode ? 0.18 : 0.28);
            const isLineNear =
              (mouse.x - n.x) ** 2 + (mouse.y - n.y) ** 2 < mouse.radiusSq ||
              (mouse.x - n2.x) ** 2 + (mouse.y - n2.y) ** 2 < mouse.radiusSq;
            const alpha = isLineNear
              ? Math.min(baseAlpha * 1.45, isDarkMode ? 0.32 : 0.38)
              : baseAlpha;

            // #06B6D4 primary lines with #A855F7 secondary interactive emphasis
            const strokeRgb = isDarkMode
              ? (isLineNear ? purpleAccent : cyanLine)
              : accentColor;

            ctx.strokeStyle = 'rgba(' + strokeRgb + ', ' + alpha + ')';
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Render Node Points & Interactive Highlights
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const distSq = dx * dx + dy * dy;
        const isNear = distSq < mouse.radiusSq;

        const idleAlpha = isDarkMode
          ? (0.16 + Math.sin(n.pulse) * 0.04)
          : (0.18 + Math.sin(n.pulse) * 0.05);
        const alpha = isNear ? (isDarkMode ? 0.50 : 0.50) : idleAlpha;

        const nodeRgb = isDarkMode
          ? (isNear ? purpleAccent : cyanLine)
          : (isNear ? accentColor : nodeIdleColor);

        ctx.fillStyle = 'rgba(' + nodeRgb + ', ' + alpha + ')';

        const currentRadius = isNear
          ? n.radius * 1.35
          : n.radius + Math.sin(n.pulse) * 0.18;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.6, currentRadius), 0, Math.PI * 2);
        ctx.fill();

        // Spatial radar ping & hex readout near cursor
        if (distSq < 60 * 60) {
          const pulseRing = ((n.pulse * 14) % 26) + 3;
          const ringAlpha = (1 - pulseRing / 29) * (isDarkMode ? 0.20 : 0.18);
          const pingColor = isDarkMode ? purpleAccent : accentColor;

          ctx.strokeStyle = 'rgba(' + pingColor + ', ' + ringAlpha + ')';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2);
          ctx.stroke();

          ctx.font = '8px ui-monospace, SFMono-Regular, Consolas, monospace';
          ctx.fillStyle = isDarkMode ? 'rgba(' + cyanLine + ', 0.50)' : 'rgba(' + accentColor + ', 0.50)';
          ctx.fillText(n.label, n.x + 9, n.y - 9);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // --- Export helpers to window for inline triggers ---
  window.PlayArMr = {
    toggleTheme,
    toggleCRT,
    openPalette,
    closePalette,
    openAboutModal,
    closeAboutModal,
    copyEmail,
    showToast
  };

  // --- DOM Ready Bootstrapping ---
  function startBootstrap() {
    initTheme();
    initCRT();
    initClock();
    initEmailTargets();
    initKeyboard();
    initConstellationGrid();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startBootstrap);
  } else {
    startBootstrap();
  }

})();
